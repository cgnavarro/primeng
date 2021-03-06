import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';
import {NodeService} from '../../service/nodeservice';
import {CountryService} from '../../service/countryservice';
import {SelectItem,MenuItem,TreeNode} from 'primeng/api';

@Component({
    templateUrl: './responsivedemo.html',
    styles: [`
        :host ::ng-deep .forms-grid .p-md-6 {
            padding: 1em;
        }
        
        :host ::ng-deep .forms-grid .p-md-6 > div {
            margin-bottom: .5em;
        }
        
        :host ::ng-deep .radiobuttons > * {
            vertical-align: middle;
        }
    `]
})
export class ResponsiveDemo implements OnInit {

    cities: SelectItem[];

    files: TreeNode[];

    sourceCars: Car[];

    targetCars: Car[];

    data: any;

    selectedCity: string;

    val: string;

    options: SelectItem[];

    selectedOption: string;

    display: boolean = false;

    cars: Car[];

    cars1: Car[];

    cars2: Car[];

    cars3: Car[];

    date: string;

    text: string;

    filteredCountriesSingle: any[];
    
    items1: MenuItem[];
    
    items2: MenuItem[];
    
    splitMenuItems: MenuItem[];
    
    country: any;
    
    showDialog() {
        this.display = true;
    }

    constructor(private carService: CarService, private countryService: CountryService, private nodeService: NodeService) {
        this.cars2 = [
            {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
            {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
            {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
            {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
            {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
            {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
            {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
            {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
            {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
        ];

        this.cities = [];
        this.cities.push({label:'Select Cities', value:'Select Cities'});
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});

        this.options = [];
        this.options.push({label:'Option 1', value:'Option 1'});
        this.options.push({label:'Option 2', value:'Option 2'});
        this.options.push({label:'Option 3', value:'Option 3'});
        this.options.push({label:'Option 4', value:'Option 4'});
        this.options.push({label:'Option 5', value:'Option 5'});

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
        this.nodeService.getFiles().then(files => this.files = files);
        this.carService.getCarsSmall().then(cars1 => this.cars1 = cars1);
        this.carService.getCarsSmall().then(cars3 => this.sourceCars = cars3);
        this.targetCars = [];
        
        this.items1 = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'pi pi-fw pi-plus'},
                {label: 'Open', icon: 'pi pi-fw pi-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'pi pi-fw pi-undo'},
                {label: 'Redo', icon: 'pi pi-fw pi-replay'}
            ]
        }];
        
        this.items2 = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file-o',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-palette',
                items: [
                    {label: 'Undo', icon: 'pi pi-fw pi-undo'},
                    {label: 'Redo', icon: 'pi pi-fw pi-replay'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-fw pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-refresh',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-mobile',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];
        
        this.splitMenuItems = [
            {label: 'Update', icon: 'pi pi-fw pi-refresh'},
            {label: 'Delete', icon: 'pi pi-fw pi-times'},
            {label: 'Angular.io', icon: 'pi pi-fw pi-external-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'pi pi-fw pi-palette', routerLink: ['/theming']}
        ];
    }

    filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }

    filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

}
