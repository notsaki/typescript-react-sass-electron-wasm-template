import { app, BrowserWindow } from "electron";
import * as path from "path";

const environment = process.env.NODE_ENV;

async function createWindow() {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if(environment === "development") {
		await window.loadURL("http://localhost:3000/");
	} else {
		await window.loadFile(`file://${path.join("../dist", "index.html")}`);
	}
}

app.on("ready", async () => {
	await createWindow();
})

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") app.quit();
});