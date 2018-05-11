{
    type DriveMode =  'comfort' | 'sport' | 'race';
    type DriveModeSelector = (driveMode: DriveMode) => void;

    let driveMode: DriveMode = 'comfort';
    const selector: DriveModeSelector = x => driveMode = x;

    selector('race');

    console.log(driveMode);
}