import axios from "axios";

export const dashboardController = {
    async addreport(request, response) {
        console.log("rendering new report");
        let report = {};
        const lat = request.body.lat;
        const lng = request.body.lng;
        const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&appid=eb23fec2f9ae9cce17349beea60ea3f0`
        const result = await axios.get(requestUrl);
        if (result.status == 200) {
          const reading = result.data.weather[0]; 
          report.code = reading.id;
          report.temperature = result.data.main.temp; 
          report.windSpeed = result.data.wind.speed; 
          report.pressure = result.data.main.pressure; 
          report.windDirection = result.data.wind.deg; 
        }
        console.log(report);
        const viewData = {
          title: "Weather Report",
          reading: report
        };
        response.render("dashboard-view", viewData);
      },
}