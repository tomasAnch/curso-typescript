(() => {


    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo',
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir',
    }

    const avengers: Avenger[] = [ ironman, captainAmerica, thor ];

    for ( const avenger of avengers ) {
        console.log( avenger.name, avenger.weapon );
    }

    const numero: number = 10;

    if(numero > 0) {
        const numero: number = 10;
    }


}) ()