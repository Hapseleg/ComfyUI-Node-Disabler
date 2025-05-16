import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";



const response = await api.fetchApi('/userdata/node_class_mappings.json');
if (response.ok) {
	let jsonData = await response.json();
	app.registerExtension({
		name: 'node-disabler',
		setup: () => {
			// data.forEach(module => {
			for(const mo in jsonData){
				// console.log(mo);
				jsonData[mo].forEach(nodeName => {
					app.ui.settings.addSetting({
						id: `node-disabler.${mo}.${nodeName}`,
						category: ['node-disabler', mo, nodeName],
						name: nodeName,
						type: 'boolean',
						defaultValue: true,
						async onChange(value) {
							if (value == true) {
								
							}
						}
					})
				});
			}
		},	
	});
}