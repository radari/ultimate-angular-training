// Here, we're defining the type of a function (that is, its signature) before providing its implementation
{
    let driveMode: string;
    let nbWheels: number;

    let enableDriveMode: (nbDrivingWheels: number, drivingMode: 'sand' | 'road' | 'gravel') => void;

    enableDriveMode = (nbDrivingWheels, drivingMode) => {
        driveMode = drivingMode;
        nbWheels = nbDrivingWheels;
    };

    enableDriveMode(4, 'road');
    console.log(`Drive mode is '${driveMode}' with ${nbWheels} active wheels`);
}