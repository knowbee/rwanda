<script lang="ts">
	import { Districts, Provinces, Sectors } from '@rwanda/package';

	console.log('Provinces: ', Provinces());
	console.log('Districts: ', Districts(['Kigali', 'East']));
	console.log('Sectors: ', Sectors());
	console.log('Sectors in Kigali: ', Sectors({ province: 'Kigali', district: 'Kicukiro' }));
	console.log('Sectors in invalid district: ', Sectors({ province: 'Kigali', district: 'tokyo' }));
</script>

<pre>
	{JSON.stringify(Provinces(), null, 2)}
</pre>
