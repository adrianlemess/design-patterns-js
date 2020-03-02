import { Governament } from "./src/governament"
import { State } from "./src/state"

export const startSingleton = () => {
    
    const rs = new State(
            { name: 'Rio Grande do Sul', 
              ufGovernament: Governament.getInstance({ officialName: 'Governo do Brasil', president: 'Bolsonaro'})});


    const sp = new State({ name: 'São Paulo', ufGovernament: Governament.getInstance() })

    console.log({
        rs,
        sp
    })
    }