export interface RaceProps {
    round: string
    date: string
    time: string
    raceName: string
    Circuit: {
        circuitName: string
    }
}

export interface DriverStandingProps {
        position: string
        points: string
        Driver: {
            code: string
            givenName: string
            familyName: string
            permanentNumber: string
        }
        Constructors: [
            {
                constructorId: string
            }
        ]
}

export interface ConstructorStandingProps {
    position: string
    points: string
    Constructor: {
        constructorId: string
        name: string
    }
}