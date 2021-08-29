import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {PlaceholderDirective} from "./form/placeholder.directive";
import {FormComponent} from "./form/form.component";
import {BoxOption} from "./pmt-fast-report-box/pmt-fast-report-box.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(PlaceholderDirective, {static: true}) addHost : PlaceholderDirective | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormComponent);
    this.addHost?.viewContainerRef.clear();
    const component = this.addHost?.viewContainerRef.createComponent(componentFactory);
    if(component?.instance){
      component.instance.form = {
        "title": "My Test Form",
        "components": [
          {
            "type": "textfield",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "First Name",
            "key": "firstName",
            "placeholder": "Enter your first name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true,
              "minLength": 2,
              "maxLength": 10,
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "type": "textfield",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Last Name",
            "key": "lastName",
            "placeholder": "Enter your last name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": true,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true,
              "minLength": 2,
              "maxLength": 10,
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "type": "email",
            "input": true,
            "tableView": true,
            "inputType": "email",
            "inputMask": "",
            "label": "email",
            "key": "email",
            "placeholder": "Enter your email",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": true,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": true ,
              "minLength":"",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "eq": ""
            }
          },
          {
            "input": true,
            "label": "Submit",
            "tableView": false,
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "type": "button"
          }
        ],

      };
      component.instance.renderOptions =  {
        "language": "ir",
        "i18n": {
          "ir": {
            'First Name': 'نام',
            'Last Name': 'نام خانوادگی',
            'Enter your first name': 'لطفا نام خود را وارد کنید',
            'Enter your last name': 'لطفا نام خانوادگی خود را وارد کنید',
            'email': 'ایمیل',
            'Enter your email': 'ایمیل خود را وارد کنید',
            'Submit': 'تایید',
            minLength : ".{{field}} باید بزرگتر از  {{length}} حرف باشد ",
            error : "لطفا خطای خود را اصلاح کنید بعد ادامه دهید",
            invalid_date :"{{field}} تاریخ معتبر نیست",
            invalid_email : "{{field}}  معتبری نیست",
            invalid_regex : "{{field}} does not match the pattern {{regex}}.",
            mask : "{{field}} does not match the mask.",
            max : "{{field}} نباید بزرگتر  {{max}}باشد",
            maxLength : "{{field}} باید کمتر از  {{length}} charactersباشد ",
            min : "{{field}} نمیتواند کمتر  {{min}}باشد ",
            next : "بعد",
            pattern : "{{field}} با الگو هم خوانی ندارد{{pattern}}",
            previous : "قبل",
            required : "{{field}} الزامی هست"
          }
        }
      }
    }
    component?.instance.formSubmit.subscribe(value => {
      console.log(value.data)
    })

  }

  successBox: BoxOption = {
    title: 'accepted',
    subtitle: '125',
    class: 'bg-success',
    avatar: {
      icon: 'done',
      class: 'bg-light'
    },
    actions:[
      {
        title: 'more detail',
        icon: 'info',
        url: ''
      }
    ]
  }

}
