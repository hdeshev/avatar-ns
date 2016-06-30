import {Inject, Component} from '@angular/core';
import {AvatarModel} from '../../shared/avatar.model';
import {AvatarService} from '../../shared/avatar.service';

@Component({
    selector: 'hello',
    providers: [AvatarModel, AvatarService],
    templateUrl: 'pages/avatar/avatar.html'
})
export class AvatarComponent {

    availableEyes: Array<string> = ['eyes1'];
    availableNoses: Array<string> = ['nose1'];
    availableMouths: Array<string> = ['mouth1'];

    selectedEyesIndex: number = 0;
    selectedNoseIndex: number = 0;
    selectedMouthIndex: number = 0;

    get eyes(): string {
        return this.availableEyes[this.selectedEyesIndex];
    };
    get nose(): string {
        return this.availableNoses[this.selectedNoseIndex];
    }
    get mouth(): string {
        return this.availableMouths[this.selectedMouthIndex];
    }

    avatarSrc: string;

    constructor(@Inject(AvatarModel) private model: AvatarModel) {
        this.reloadAvatar();

   }

    reloadAvatar() {
        this.model.reloadAvatar();
    }
}
