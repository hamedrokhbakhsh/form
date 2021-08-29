import {Component, Input, OnInit} from '@angular/core';
import {Avatar, BoxOption} from './pmt-fast-report-box.interfaces';


const defaultAvatarConfig: Avatar = {
    class: "text-light bg-success",
    icon: "user",
    iconSize: "4rem"
}

const defaultConfig: BoxOption = {
    class: "",
    bodyClass: "bg-light text-dark",
    subtitle: "",
    title: "",
    titleClass: "",
    subtitleClass: "",
    textClass: "",
    actionClass: "bg-light text-dark"
};

@Component({
    selector: 'pmt-fast-report-box',
    templateUrl: './pmt-fast-report-box.component.html',
    styleUrls: ['./pmt-fast-report-box.component.scss']
})

export class PmtFastReportBoxComponent implements OnInit {


    @Input() option: BoxOption | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }


    avatarClass() {
        return [this.option?.avatar?.class ? this.option?.avatar?.class : defaultAvatarConfig.class];
    }

    bodyClass() {
        return [this.option?.bodyClass ? this.option?.bodyClass : defaultConfig.bodyClass];
    }

    titleClass() {
        return [this.option?.titleClass ? this.option?.titleClass : defaultConfig.titleClass];
    }

    subtitleClass() {
        return [this.option?.subtitleClass ? this.option?.subtitleClass : defaultConfig.subtitleClass];
    }

    textClass() {
        return [this.option?.textClass ? this.option?.textClass : defaultConfig.textClass];
    }


    mainClass() {
        return [this.option?.class ? this.option?.class : defaultConfig.class];
    }

    actionClass() {
        return [this.option?.actionClass ? this.option?.actionClass : defaultConfig.actionClass];
    }

    avatarIcon() {
        return this.option?.avatar?.icon ? this.option?.avatar?.icon : defaultAvatarConfig?.icon;
    }

    avatarIconSize() {
        return this.option?.avatar?.iconSize ? this.option?.avatar?.iconSize : defaultAvatarConfig?.iconSize;
    }


    hasActions() {
        return this.option?.actions?.length && this.option?.actions?.length > 0;
    }
}
