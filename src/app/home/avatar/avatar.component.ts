import { Component, Input } from "@angular/core";
import { Competition } from "../home.model";

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() competition: Competition | undefined;

  getInitials(name: string): string {    
    const names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  get initials(): string {
    if (this.competition) {
      return this.getInitials(this.competition?.name);
    }
    return '';
  }
}
