
let driveMode: string = 'sand';
function selectCarDriveMode(mode: 'road' | 'off-road' | 'sand' | 'gravel') : void {
    driveMode = mode;
}

selectCarDriveMode('road');
console.log(driveMode);

selectCarDriveMode('offroad');
console.log(driveMode);
