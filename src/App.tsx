import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <ApiReferenceReact
    configuration={{
        url: 'https://api.api-fiddle.com/v1/public/resources/oas_api_3_1/sunday-joshuas-organization-823/dry-kangaroo-frsa?draft_id=01997346-7d62-7192-9b17-272a917036d7',
    }}
    />
  )
}

export default App