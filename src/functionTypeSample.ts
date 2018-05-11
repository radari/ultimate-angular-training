// Here, we're defining the type of a function (that is, its signature) before providing its implementation
{
    let driveMode: string = 'ice';
    let nbWheels: number = 2;

    // note that the second argument is optional -> see the '?'
    let enableDriveMode: (nbDrivingWheels: number, drivingMode?: 'sand' | 'road' | 'gravel') => void;

    enableDriveMode = (nbDrivingWheels, drivingMode = 'sand') => {
        if (drivingMode) {
            driveMode = drivingMode;
        }
        nbWheels = nbDrivingWheels;
    };

    enableDriveMode(4, 'road');
    console.log(`Drive mode is '${driveMode}' with ${nbWheels} active wheels`);

    enableDriveMode(2);
    console.log(`Drive mode is '${driveMode}' with ${nbWheels} active wheels`);
}