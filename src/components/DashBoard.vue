<template >
  <section>
    <header>
      <img alt="coreui logo" src="../assets/menu-button.svg" class="menu-button">
      <div class="left-buttons">DashBoard</div>
      <div class="left-buttons">Users</div>
      <div class="left-buttons">Settings</div>
      <div class="menu-right">
        <img alt="coreui logo" src="../assets/notif-icon.svg" class="right-buttons">
        <img alt="coreui logo" src="../assets/options-icon.svg" class="right-buttons">
        <img alt="coreui logo" src="../assets/mail-icon.svg" class="right-buttons">
        <img alt="coreui logo" src="../assets/user-icon.svg" class="right-buttons user">
      </div>
    </header>
    <article class="path">
      Home / &#160; <a href="#" class="link">DashBoard</a>
    </article>  
  <!-- GLOBAL statistics  -->
    <article class="stats">
      <CRow>
        <CCol :xs="4">
          <CWidgetStatsA class="mb-3" color="primary">
            <template #value
              >26K
              <span class="fs-6 fw-normal">
                (-12.4% <CIcon icon="cil-arrow-bottom" />)
              </span>
            </template>
            <template #title>Users</template>
            <template #action>
              <CDropdown placement="bottom-end">
                <CDropdownToggle
                  color="transparent"
                  class="p-0 text-white"
                  :caret="false"
                >
                  <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
            <template #chart>
              <CChart
                type="line"
                class="mt-3 mx-3"
                style="height: 70px"
                :data="{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#321fdb',
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }"
                :options="{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }"
              />
            </template>
          </CWidgetStatsA>
        </CCol>
        <CCol :xs="4">
          <CWidgetStatsA class="mb-3" color="info">
            <template #value
              >$6.200
              <span class="fs-6 fw-normal">
                (40.9% <CIcon icon="cil-arrow-top" />)
              </span>
            </template>
            <template #title>Income</template>
            <template #action>
              <CDropdown placement="bottom-end">
                <CDropdownToggle
                  color="transparent"
                  class="p-0 text-white"
                  :caret="false"
                >
                  <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
            <template #chart>
              <CChart
                type="line"
                class="mt-3 mx-3"
                style="height: 70px"
                :data="{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#39f',
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }"
                :options="{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }"
              />
            </template>
          </CWidgetStatsA>
        </CCol>
        <CCol :xs="4">
          <CWidgetStatsA class="mb-3" color="warning">
            <template #value
              >2.49%
              <span class="fs-6 fw-normal">
                (84.7% <CIcon icon="cil-arrow-top" />)
              </span>
            </template>
            <template #title>Conversion Rate</template>
            <template #action>
              <CDropdown placement="bottom-end">
                <CDropdownToggle
                  color="transparent"
                  class="p-0 text-white"
                  :caret="false"
                >
                  <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
            <template #chart>
              <CChart
                type="line"
                class="mt-3"
                style="height: 70px"
                :data="{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }"
                :options="{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }"
              />
            </template>
          </CWidgetStatsA>
        </CCol>
        <CCol :xs="4">
          <CWidgetStatsA class="mb-3" color="danger">
            <template #value
              >44K
              <span class="fs-6 fw-normal">
                (-23.6% <CIcon icon="cil-arrow-bottom" />)
              </span>
            </template>
            <template #title>Sessions</template>
            <template #action>
              <CDropdown placement="bottom-end">
                <CDropdownToggle
                  color="transparent"
                  class="p-0 text-white"
                  :caret="false"
                >
                  <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
            <template #chart>
              <CChart
                type="bar"
                class="mt-3 mx-3"
                style="height: 70px"
                :data="{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                    'January',
                    'February',
                    'March',
                    'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [
                        78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                        82,
                      ],
                      barPercentage: 0.6,
                    },
                  ],
                }"
                :options="{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }"
              />
            </template>
          </CWidgetStatsA>
        </CCol>
      </CRow>
    </article>
    <!-- Chart + widgets -->
    <article>
     <CCard style="margin: 1%;">
        <CCardBody class="traffic">
          <div>
            <CCardTitle>Traffic</CCardTitle>
            <CCardSubtitle class="mb-2 text-muted">January - July 2021</CCardSubtitle>
          </div>
          <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio1" autocomplete="off" label="Day" />
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio2" autocomplete="off" label="Month" checked/>
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio3" autocomplete="off" label="Year"/>
          </CButtonGroup>
          <CButton component="a" color="primary" href="#" role="button"> <CIcon :icon="cilCloudDownload" size="xl"/></CButton>
        </CCardBody>
        <canvas id="myChart" width="400" height="75"></canvas>
        <CRow class="widgets">
          <CCol :xs="4">
            <CWidgetStatsB
              class="mb-3"
              :progress="{ color: 'success', value: 75}"
            >
              <template #title>29.703 Users (40%)</template>
              <template #value>Visits</template>
            </CWidgetStatsB>
          </CCol>
          <CCol :xs="4">
            <CWidgetStatsB
              class="mb-3"
              :progress="{ color: 'info', value: 75}"
              title="24.093 Users (20%)"
              value="Unique"/>
          </CCol>
          <CCol :xs="4">
            <CWidgetStatsB
              class="mb-3"
              :progress="{ color: 'warning', value: 75}"
              title="78,706 Views (60%)"
              value="Pageviews"/>
          </CCol>
          <CCol :xs="4">
            <CWidgetStatsB
              class="mb-3"
              :progress="{ color: 'danger', value: 75}"
              title="22,123 Users (80%)"
              value="New Users"/>
          </CCol>
          <CCol :xs="4">
            <CWidgetStatsB
              class="mb-3"
              :progress="{ color: 'primary', value: 75}"
              title="40,15%"
              value="Bounce Rate"/>
          </CCol>
        </CRow>
      </CCard>
    </article>
    <article class="social_buttons">
      <div class="social fb">
        <img alt="coreui logo" src="../assets/fb-icon.svg" >
      </div>
      <div class="social twt">
        <img alt="coreui logo" src="../assets/twt-icon.svg" >
      </div>
      <div class="social ldn">
        <img alt="coreui logo" src="../assets/ldn-icon.svg" >
      </div>
    </article>
  </section>
</template>

<script>  
import Chart from 'chart.js/auto';
import { cilCloudDownload } from '@coreui/icons';
export default {
  name: "DashBoard",
  components: {
  },
  setup() {
      return {
        cilCloudDownload
      }
  },
  mounted(){
    const ctx = document.getElementById('myChart').getContext('2d');

    const labels = ['January','February','March','April','May','June','July']
    const data = {
      labels: labels,
      datasets: [{
        label: 'Unique',
        data: [190, 55, 180, 100, 70, 100, 130],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5,
      },
      {
        label: 'Visits',
        borderColor: 'rgba(134,213,160,255)',
        data: [180, 60, 100, 170, 190, 100, 190],
        tension:0.5
      }]
    };
    const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
}); 
  }
}
</script>

<style scoped>  
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85%;
}
header {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 8%;
  background: white;
  margin-bottom: 5px;
}
.menu-button {
  margin-left: 1%;
  cursor: pointer;
}
.left-buttons {
  margin-left: 1%;
  margin-right: 1%;
  color: grey;
  cursor: pointer;
}
.right-buttons {
  margin-right: 8%;
  cursor: pointer;
}
.user {
  width: 40px;
  height: 40px;
  margin-left: 10%;
}
.menu-right {
  position: absolute;
  right: 4%;
  display: flex;
}
.path {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  background: white;
  margin-bottom: 5px; 
  padding-left: 1%;
}
.link {
  text-decoration: none;
  color: #bababa;
}
.stats {
  display: flex;
  justify-content: flex-start;
  width: 99%;
  flex-wrap: nowrap;
  margin-left: 1%;  
  margin-top: 1%;
}
.row {
  flex-wrap: nowrap;
  width: 75%;
}
.traffic {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.widgets {
  width: 59%;
  height: 20%;
  height: auto;
  display: flex;
  margin-left: 1%;
  margin-top: 1%;
}
.social_buttons {
  display: flex;
  justify-content: space-evenly;
  height: 12%;
  margin: 1%;
}
.social {
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}
.fb {
  background: rgba(59,89,152,255);
}
.twt {
background: rgba(1,172,237,255);
}
.ldn {
background: rgba(72,117,180,255);
}
</style>