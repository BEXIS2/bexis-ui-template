<script lang="ts">

import  {TextInput, Page} from '@bexis2/bexis2-core-ui'


interface input {
  id:string,
  label:string,
  type:string,
  feedback:string[],
  invalid: boolean,
  valid: boolean,
  required: boolean
}

let data:input = {
  id:"name",
  label:"string",
  type:"string",
  feedback:[""],
  invalid: true,
  valid: false,
  required: false
}

</script>

<Page title="Test Form Page"  note="here you can see if it works">

  <div >
    <TextInput  {...data}/>
  </div>
  

</Page>
