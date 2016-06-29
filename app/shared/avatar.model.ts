import {AvatarService} from './avatar.service';

export class AvatarModel {
    availableEyes: Array<string> = ["eyes1"];
    availableNoses: Array<string> = ["nose1"];
    availableMouths: Array<string> = ["mouth1"];

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

    constructor(private _avatarService: AvatarService) {
        this.reloadAvatar();

        this._avatarService.getPossilbeParts()
            .then(
                (face) => {
                    this.availableEyes = face.eyes;
                    this.availableNoses = face.nose;
                    this.availableMouths = face.mouth;
                },
                (error) => alert("Couldn't load face features")
            );
   }

    reloadAvatar() {
        this.avatarSrc = this._avatarService.getAvatarSrc(this.eyes, this.nose, this.mouth);
    }

}