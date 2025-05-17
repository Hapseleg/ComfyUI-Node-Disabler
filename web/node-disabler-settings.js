import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
console.log("-------------------------- Node Disabler --------------------------");
// app.extensionManager.setting.set('TestSetting', 'Hello, universe!')
// try {
// 	const test = await app.extensionManager.setting.set("example.boolean", true,);
// 	console.log(test);
// } catch (error) {
// 	console.error(`Error changing setting: ${error}`);
// }
// await app.extensionManager.setting.set(`node-disabler.${mo}.${nodeName}`, true);


// const comfysettingsjson = await api.fetchApi('/userdata/comfy.settings.json')
// if(comfysettingsjson.ok){
// 	let comfyjs = await comfysettingsjson.json()
// 	console.log(comfyjs)
// }
// console.log(comfysettingsjson)
// const testz = await app.extensionManager.setting;
// console.log(testz);

const response = await api.fetchApi('/userdata/node_class_mappings.json');




if (response.ok) {
	let jsonData = await response.json();
	app.registerExtension({
		name: 'node-disabler',
		setup: () => {


			// Register settings for each node
			for(const mo in jsonData){
				jsonData[mo].forEach(nodeName => {
					app.ui.settings.addSetting({
						id: `node-disabler.${mo}.${nodeName}`,
						category: ['Node Disabler', mo, nodeName],
						name: nodeName,
						type: 'boolean',
						defaultValue: true,
						async onChange(value) {
							// console.log(`Node Disabler: ${nodeName} is now ${value}`);
							if (value == true) {
								// addBookmark(nodeName);
								// await app.extensionManager.setting.set('node-disabler', ['...bookmarks.value', nodeName])
								// await app.extensionManager.setting.set(`node-disabler.${mo}.${nodeName}`, true);
								// try {
								// 	await app.extensionManager.setting.set("example.boolean", true);
								// } catch (error) {
								// 	console.error(`Error changing setting: ${error}`);
								// }
							}

						}
					})

				});
			}
		},	
	});
}
console.log("----------------------------------------------------");
