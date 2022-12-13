import { useState } from 'react'

export default function Home() {
  const hunters = [
    "Olle Emilsson",
    "Johan Emilsson",
    "Bengt Emilsson",
    "Victor Ebel",
    "Bo Öhman",
    "Henry Johansson",
    "Victor Johansson",
    "Johan Olsson",
    "Max Höijer",
    "Thomas Höijer"
  ]

  const [roedeer, setRoedeer] = useState([...hunters])
  const [wildswein, setWildswein] = useState([...hunters.reverse()])
  const [split, setSplit] = useState(false)

  const assignRoedeer = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const claimer = e.target[0].value
    const claimerIndex = roedeer.findIndex((n) => claimer === n)
    const newRoedeer = roedeer.splice(claimerIndex, 1)

    setRoedeer([...roedeer, claimer])
    
  }

  const assignWildswein = (e) => {
    e.preventDefault()
    const claimer = e.target[0].value
    const claimerIndex = wildswein.findIndex((n) => claimer === n)
    const newWildswein = wildswein.splice(claimerIndex, 1)

    setWildswein([...wildswein, claimer])
  }


  return (
    <div>
      <div style={{'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'padding-bottom': 12, 'padding-top': 12}}>
        <h1>Rådjur</h1>
        <form onSubmit={(f) => assignRoedeer(f)} style={{paddingBottom: 8}}>
          <select name="roedeer" id="rodeer">
          {
            roedeer.map((n) => {
              return <option value={n}>{n}</option>

            })

          }
          </select>
          <input type="submit" value="Tilldela rådjur"/>
        </form>
        {
          roedeer.map((n) => {return <li style={{padding: 4}}>{n}</li>}) 
        }
      </div>
      <h1>Vildsvin</h1>
      <form onSubmit={(f) => assignWildswein(f)} style={{paddingBottom: 8}}>
        <select name="wildswein" id="wildswein">
        {
          wildswein.map((n) => {
            return <option value={n}>{n}</option>
          })

        }
        </select>
        <input type="submit" value="Tilldela vildsvin"/>
      </form>
        {
          wildswein.map((n) => {return <li style={{padding: 4}}>{n}</li>}) 
        }
    </div>
  )
}
