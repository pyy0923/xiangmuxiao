import React from 'react'
import ReactEcharts from 'echarts-for-react';
class Home extends React.Component{
    constructor(){
        super()
        this.state={
          option: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {data: [82, 232, 401, 534, 650, 1000, 1320],
            type: 'line'},
            {data: [82, 232, 401, 534, 650, 1000, 1320],
            type: 'bar'}
            
      ]
    }
        }
      }
      render(h) {
        return(
          <div style={{height:'500px'}} >
            <h3>图书周访问数据</h3>
            <ReactEcharts option={this.state.option}></ReactEcharts>
          </div>
        )
      }
    }

export default Home