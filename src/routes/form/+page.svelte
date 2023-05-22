<script lang="ts">

import  {TextInput} from '@bexis2/bexis2-core-ui'


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


<div class="p-5">
  <TextInput  {...data}/>
  <input type="text" class="input variant-form-material" />

</div>
