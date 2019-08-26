ableau.extensions.initializeAsync().then(() => {
  console.log('I have been initialized!!')
});

function refresh() {
  let dashboard = tableau.extensions.dashboardContent.dashboard;
  // let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'params');
  let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'params');
  selectedWorksheet.getDataSourcesAsync().then(dataSources => {
    // let selectedDataSource = dataSources.find(ds => ds.name === 'position');
    let selectedDataSource = dataSources.find(ds => ds.name === 'dummydata_vics_horizontal2 抽出');
    selectedDataSource.refreshAsync();
  })
}
