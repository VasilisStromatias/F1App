export interface RaceProps {
    round: string
    date: string
    time: string
    raceName: string
    Circuit: {
        circuitName: string
    }
    FirstPractice: {
        date: string
        time: string
    }
    SecondPractice: {
        date: string
        time: string
    }
    ThirdPractice: {
        date: string
        time: string
    }
    Qualifying: {
        date: string
        time: string
    }
    SprintQualifying: {
        date: string
        time: string
    }
    Sprint: {
        date: string
        time: string
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

export interface RaceResultProps {
    position: string
    Driver: {
        givenName: string
        familyName: string
    }
    Constructor: {
        name: string
        constructorId: string
    }
    Time?: {
        time: string
    }
    status: string
}