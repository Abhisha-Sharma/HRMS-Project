import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AttendanceDetailsById } from '../../../attendance/attendance-by-id/store/attendance-details-by-id.state';
import { selectCalendarViewData } from '../../../attendance/attendance-by-id/store/attendance-details-by-id.selector';
import { CalenderViewData } from '../../../attendance/model/attendance-details.interface';
import { loadAttendanceListById } from '../../../attendance/attendance-by-id/store/attendance-details-by-id.actions';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  calanderViewData: CalenderViewData[] = [];
  profileId = localStorage.getItem('employeeId');
  events: any;
  calendarOptions!: CalendarOptions;
  constructor(private attendanceByIdStore: Store<AttendanceDetailsById>) {}

  ngOnInit(): void {
    this.attendanceByIdStore
      .select(selectCalendarViewData)
      .subscribe((data) => {
        this.calanderViewData = data ? data : [];
        this.calandarInitilizer();
      });
    this.attendanceByIdStore.dispatch(
      loadAttendanceListById({
        payload: { employeeId: this.profileId, sort: { sortBy: 'Asc' } },
      })
    );
  }
  calandarInitilizer(): void {
    this.events = this.calanderViewData?.flatMap((emp: any) => {
      return [
        {
          start: `${emp.date}T${emp.checkin}`,
          className: this.getCheckinClass(emp.checkin),
        },
        {
          start: `${emp.date}T${emp.checkout}`,
          className: this.getCheckoutClass(emp.checkout),
        },
      ];
    });
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin],
      events: this.events,
      lazyFetching: true,
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      },
      eventColor: 'transparent',
    };
  }
  getCheckinClass(checkinTime: string): string {
    const checkinDate = new Date(`1970-01-01T${checkinTime}`);
    const limit = new Date(`1970-01-01T09:05:00`);
    return checkinDate > limit ? 'checkin-late' : 'checkin-on-time';
  }

  getCheckoutClass(checkoutTime: string): string {
    const checkoutDate = new Date(`1970-01-01T${checkoutTime}`);
    const limit = new Date(`1970-01-01T18:00:00`);
    return checkoutDate < limit ? 'checkout-early' : 'checkout-on-time';
  }
}
