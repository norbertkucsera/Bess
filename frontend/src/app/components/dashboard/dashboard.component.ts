import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/auth.model';

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface SourceItem {
  label: string;
  tone: 'teal' | 'green' | 'amber';
}

interface MetricItem {
  label: string;
  value: string;
}

interface DriverItem {
  label: string;
  value: string;
  tone: 'amber' | 'blue' | 'green';
}

interface EventItem {
  name: string;
  time: string;
  tone: 'blue' | 'amber';
}

interface HourlyPlanItem {
  hour: string;
  demand: string;
  production: string;
  battery: string;
  energyToBuy: string;
  marketPrice: string;
  recommendation: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  currentUser: User | null = null;

  readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'space_dashboard', active: true },
    { label: 'Forecast', icon: 'query_stats' },
    { label: 'Batteries', icon: 'battery_charging_full' },
    { label: 'Market Prices', icon: 'show_chart' },
    { label: 'Events', icon: 'event' },
    { label: 'Financial Optimization', icon: 'savings' },
    { label: 'Recommendations', icon: 'auto_awesome' },
    { label: 'Settings', icon: 'settings' }
  ];

  readonly connectedSources: SourceItem[] = [
    { label: 'Historical consumption', tone: 'teal' },
    { label: 'Weather API', tone: 'green' },
    { label: 'Calendar API', tone: 'teal' },
    { label: 'Local Events AI', tone: 'amber' },
    { label: 'Withthegrid', tone: 'green' },
    { label: 'Energy Price API', tone: 'teal' }
  ];

  readonly decisionDrivers: DriverItem[] = [
    { label: 'Demand peak', value: '18:00-21:00', tone: 'amber' },
    { label: 'Battery reserve', value: '12 MWh', tone: 'blue' },
    { label: 'Lowest price window', value: '03:00-05:00', tone: 'green' },
    { label: 'Weather pressure', value: '+8.5% demand', tone: 'teal' as 'green' }
  ];

  readonly demandMetrics: MetricItem[] = [
    { label: 'Forecasted peak', value: '9.8 MW' },
    { label: 'Total forecasted demand', value: '142 MWh' },
    { label: 'Confidence', value: '91%' }
  ];

  readonly batteryMetrics: MetricItem[] = [
    { label: 'Total battery capacity', value: '38 MWh' },
    { label: 'Current state of charge', value: '64%' },
    { label: 'Available discharge', value: '21.4 MWh' }
  ];

  readonly productionMetrics: MetricItem[] = [
    { label: 'Solar forecast', value: '18.2 MWh' },
    { label: 'Wind forecast', value: '9.4 MWh' },
    { label: 'Total local production', value: '27.6 MWh' }
  ];

  readonly weatherMetrics: MetricItem[] = [
    { label: 'Temperature', value: '4C to 11C' },
    { label: 'Wind speed', value: '26 km/h' },
    { label: 'Solar irradiation', value: '480 W/m2' }
  ];

  readonly calendarMetrics: MetricItem[] = [
    { label: 'Calendar status', value: 'Working day' },
    { label: 'Holiday / bridge day', value: 'No' },
    { label: 'AI impact estimate', value: '+3.2%' }
  ];

  readonly marketMetrics: MetricItem[] = [
    { label: 'Lowest price hour', value: '03:00-05:00' },
    { label: 'Highest price hour', value: '19:00-20:00' },
    { label: 'Intraday volatility', value: 'High' }
  ];

  readonly riskItems = [
    'Evening peak demand',
    'Lower solar production',
    'High market price volatility'
  ];

  readonly eventItems: EventItem[] = [
    { name: 'Football match', time: '20:00', tone: 'blue' },
    { name: 'Large concert downtown', time: '19:30', tone: 'amber' }
  ];

  readonly batteryBars = [18, 28, 36, 44, 30, 18, 48, 54, 44];

  readonly hourlyPlan: HourlyPlanItem[] = [
    {
      hour: '03:00',
      demand: '5.1 MW',
      production: '0.0 MW',
      battery: 'Charge 1.8 MW',
      energyToBuy: '6.9 MW',
      marketPrice: 'EUR 58/MWh',
      recommendation: 'Buy more'
    },
    {
      hour: '09:00',
      demand: '6.2 MW',
      production: '2.8 MW',
      battery: 'Charge 0.6 MW',
      energyToBuy: '4.0 MW',
      marketPrice: 'EUR 72/MWh',
      recommendation: 'Use local first'
    },
    {
      hour: '14:00',
      demand: '6.8 MW',
      production: '4.1 MW',
      battery: 'Idle',
      energyToBuy: '2.7 MW',
      marketPrice: 'EUR 81/MWh',
      recommendation: 'Hold battery'
    },
    {
      hour: '18:00',
      demand: '9.8 MW',
      production: '1.2 MW',
      battery: 'Discharge 2.5 MW',
      energyToBuy: '6.1 MW',
      marketPrice: 'EUR 142/MWh',
      recommendation: 'Use battery',
      highlight: true
    },
    {
      hour: '20:00',
      demand: '9.4 MW',
      production: '0.8 MW',
      battery: 'Discharge 2.1 MW',
      energyToBuy: '6.5 MW',
      marketPrice: 'EUR 138/MWh',
      recommendation: 'Minimize buy'
    },
    {
      hour: '22:00',
      demand: '7.1 MW',
      production: '0.0 MW',
      battery: 'Idle',
      energyToBuy: '7.1 MW',
      marketPrice: 'EUR 94/MWh',
      recommendation: 'Normalize'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  get displayName(): string {
    if (!this.currentUser) {
      return 'Operator';
    }

    return this.currentUser.firstName || this.currentUser.email;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
