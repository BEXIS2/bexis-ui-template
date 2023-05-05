<script lang="ts">

import { SlideToggle } from '@skeletonlabs/skeleton';

import type {FileInfo} from '@bexis2/bexis2-core-ui'
import {Api} from '@bexis2/bexis2-core-ui'



$:toggle = false;

</script>
<h1>Test with layout</h1>


<SlideToggle name="david" bind:checked={toggle}></SlideToggle>
<br/>

<b>toggle : {toggle}</b>

