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
    <article>
     <CCard style="margin: 1%;">
        <CCardBody class="traffic">
          <div>
            <CCardTitle>Traffic</CCardTitle>
            <CCardSubtitle class="mb-2 text-muted">January - July 2021</CCardSubtitle>
          </div>
          <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio1" autocomplete="off" label="Day" checked/>
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio2" autocomplete="off" label="Month"/>
            <CFormCheck type="radio" :button="{color: 'secondary', variant: 'outline'}" name="btnradio" id="btnradio3" autocomplete="off" label="Year"/>
          </CButtonGroup>
          <CButton component="a" color="primary" href="#" role="button"> <CIcon :icon="cilCloudDownload" size="xl"/></CButton>
        </CCardBody>
        <CChart
          :size="{ width: 500, height: 420 }"
          type="line"
          :data="{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: [40, 20, 12, 39, 10, 40, 39],
              },
              {
                label: 'My Second dataset',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [50, 12, 28, 29, 7, 25, 12]
              }
            ]
          }"
        />
      </CCard>
    </article>
  </section>
</template>

<script>  
import { cilCloudDownload } from '@coreui/icons';
export default {
  name: "DashBoard",
  components: {
  },
  setup() {
      return {
        cilCloudDownload
      }
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
  height: 7%;
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
  width: 100%;
  flex-wrap: nowrap;
  padding: 1%;
  
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
</style>