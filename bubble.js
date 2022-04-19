
all_stress=[[],[],[],[],[]]

d3.csv('https://github.com/ayusht22/bubble-chart/blob/master/stress.csv',function(data){

    for (var i = 0; i < data.length; i++) {
        all_stress[0].push(data[i]['ts0'])
        all_stress[1].push(data[i]['ts200'])
        all_stress[2].push(data[i]['ts500'])
        all_stress[3].push(data[i]['ts700'])
        all_stress[4].push(data[i]['ts800'])
      }
    

} ) 


ts0_coordinates={}
ts0_coordinates['x']=[]
ts0_coordinates['y']=[]

ts200_coordinates={}
ts200_coordinates['x']=[]
ts200_coordinates['y']=[]

ts500_coordinates={}
ts500_coordinates['x']=[]
ts500_coordinates['y']=[]

ts700_coordinates={}
ts700_coordinates['x']=[]
ts700_coordinates['y']=[]

ts800_coordinates={}
ts800_coordinates['x']=[]
ts800_coordinates['y']=[]
states=[]
states2=[]
states3=[]
states4=[]
states5=[]
progressLine=[]

barPlot={}



d3.json('https://github.com/ayusht22/bubble-chart/blob/master/sdg.json',function(data){

    for (var i = 0; i < data.length; i++) {

        let state=data[i]['resource_name']
        state=state.split(" ")
        stateName=""
        
        for(let k=0;k<state.length-1;k++){
          stateName+=(state[k]+" ")
        }
       
         
       
        
        
       
        if(state[state.length-1]=='firstTimestamp'){
        ts0_coordinates['x'].push(data[i]['ld'][0])
        ts0_coordinates['y'].push(data[i]['ld'][1])
        states.push(stateName)
        }
        else if(state[state.length-1]=='secondTimestamp'){
        ts200_coordinates['x'].push(data[i]['ld'][0])
        ts200_coordinates['y'].push(data[i]['ld'][1])
        states2.push(stateName+" 2")
        }
        else if(state[state.length-1]=='thirdTimestamp'){
          ts500_coordinates['x'].push(data[i]['ld'][0])
          ts500_coordinates['y'].push(data[i]['ld'][1])
          states3.push(stateName+" 3")
          }
        else if(state[state.length-1]=='fourthTimestamp'){
          ts700_coordinates['x'].push(data[i]['ld'][0])
          ts700_coordinates['y'].push(data[i]['ld'][1])
          states4.push(stateName+" 4")
          }
        else if(state[state.length-1]=='fifthTimestamp'){
          ts800_coordinates['x'].push(data[i]['ld'][0])
          ts800_coordinates['y'].push(data[i]['ld'][1])
          states5.push(stateName+" 5")
          }
        
        let aspC=0
        let frontC=0
        let achieverC =0
        let performerC=0;

        
        for(let j=0;j<data[i].hd.length;j++){
          
          if(data[i]['hd'][j][1]<49){
            aspC++;
          }
          else if(data[i].hd[j][1]<64){
            performerC++;
          }
          else if(data[i].hd[j][1]<99){
            frontC++;
          }
          else{
            achieverC++;
          }
        }
        
        if(state[state.length-1]=='firstTimestamp')
        {
        barPlot[stateName]=
          {
            x: ['Aspirants', 'Performers', 'Front Runners','Achievers'],
            y: [aspC, performerC,frontC,achieverC],
            type: 'bar',
            marker:{
              color:['#ea9393','#ffbf86','#95cf95','#87ceeb']
            },
            
          }
        }
        else if(state[state.length-1]=='secondTimestamp')
        {
         
            let stt=stateName+" 2"
            barPlot[stt]=
            {
              x: ['Aspirants', 'Performers', 'Front Runners','Achievers'],
              y: [aspC, performerC,frontC,achieverC],
              type: 'bar',
              marker:{
                color:['#ea9393','#ffbf86','#95cf95','#87ceeb']
              },
              
            }
        }
        else if(state[state.length-1]=='thirdTimestamp')
        {
         
            let stt=stateName+" 3"
            barPlot[stt]=
            {
              x: ['Aspirants', 'Performers', 'Front Runners','Achievers'],
              y: [aspC, performerC,frontC,achieverC],
              type: 'bar',
              marker:{
                color:['#ea9393','#ffbf86','#95cf95','#87ceeb']
              },
              
            }
        }
        else if(state[state.length-1]=='fourthTimestamp')
        {
         
            let stt=stateName+" 4"
            barPlot[stt]=
            {
              x: ['Aspirants', 'Performers', 'Front Runners','Achievers'],
              y: [aspC, performerC,frontC,achieverC],
              type: 'bar',
              marker:{
                color:['#ea9393','#ffbf86','#95cf95','#87ceeb']
              },
              
            }
        }
        else if(state[state.length-1]=='fifthTimestamp')
        {
         
            let stt=stateName+" 5"
            barPlot[stt]=
            {
              x: ['Aspirants', 'Performers', 'Front Runners','Achievers'],
              y: [aspC, performerC,frontC,achieverC],
              type: 'bar',
              marker:{
                color:['#ea9393','#ffbf86','#95cf95','#87ceeb']
              },
              
            }
        }

      }

/*                                                            progress line                                         */
      for(let i =0;i<36;i++){
        
        progressLine.push( {
       
          x: ts0_coordinates['x'][i],
          y: ts0_coordinates['y'][i],
          mode: 'lines+markers',
           line: {simplify: false},
          name:states[i],
          visible:'legendonly'
        })
        
      }

      for(let i=0;i<36;i++){
        progressLine.push( {
       
          x: [ts0_coordinates['x'][i],ts200_coordinates['x'][i]],
          y: [ts0_coordinates['y'][i],ts200_coordinates['y'][i]],
          mode: 'lines+markers',
          name:states[i],
          visible:'legendonly',
          line:{
            shape:'spline',
            dash:"dot"
          }
         
        })
      }

      for(let i=0;i<36;i++){
        progressLine.push( {
       
          x: [ts0_coordinates['x'][i],ts200_coordinates['x'][i],ts500_coordinates['x'][i]],
          y: [ts0_coordinates['y'][i],ts200_coordinates['y'][i],ts500_coordinates['y'][i]],
          mode: 'lines+markers',
          name:states[i],
          visible:'legendonly',
          line:{
            shape:'spline',
            dash:"dot"
          }
         
        })
      }


      for(let i=0;i<36;i++){
        progressLine.push( {
       
          x: [ts0_coordinates['x'][i],ts200_coordinates['x'][i],ts500_coordinates['x'][i],ts700_coordinates['x'][i]],
          y: [ts0_coordinates['y'][i],ts200_coordinates['y'][i],ts500_coordinates['y'][i],ts700_coordinates['y'][i]],
          mode: 'lines+markers',
          name:states[i],
          visible:'legendonly',
          line:{
            shape:'spline',
            dash:"dot"
          }
         
        })
      }


      for(let i=0;i<36;i++){
        progressLine.push( {
       
          x: [ts0_coordinates['x'][i],ts200_coordinates['x'][i],ts500_coordinates['x'][i],ts700_coordinates['x'][i],ts800_coordinates['x'][i]],
          y: [ts0_coordinates['y'][i],ts200_coordinates['y'][i],ts500_coordinates['y'][i],ts700_coordinates['y'][i],ts800_coordinates['y'][i]],
          mode: 'lines+markers',
          name:states[i],
          visible:'legendonly',
          line:{
            shape:'spline',
            dash:"dot"
          }
         
        })
      }
      
 
     // console.log(data)


      years=['1','2','3','4','5']
      var sliderSteps = [];
      for (i = 0; i < years.length; i++) {
        sliderSteps.push({
          method: 'animate',
          label: years[i],
          args: [[years[i]], {
            mode: 'immediate',
            transition: {duration: 1000},
            frame: {duration: 1000, redraw: false},
          }]
        });
      }


/*                                                         frames at each time step                                                             */


      var frames = [];
      
        frames.push({
          name: years[0],
          data: [{
            x: ts0_coordinates['x'],
            y: ts0_coordinates['y'],
            id: states,
            text: states,
            marker: {size: all_stress[0],
              sizemode: 'area',
          
            },
            sizeref:Math.max(all_stress[0])/Math.max(all_stress[0])**2,
            
          }
        ]}
          )
        for (let i=0;i<36;i++) frames[0].data.push(progressLine[i])

        frames.push({
          name: years[1],
          data:[ {
            x: ts200_coordinates['x'],
            y: ts200_coordinates['y'],
            id: states,  
            text: states2,
            marker: {
              size: all_stress[1],
              sizemode: 'area',
          
            },
            sizeref:Math.max(all_stress[1])/Math.max(all_stress[1])**2,
      
          },
         
        ]
        })

        for(let i=36;i<72;i++)frames[1].data.push(progressLine[i])


        frames.push({
          name: years[2],
          data:[ {
            x: ts500_coordinates['x'],
            y: ts500_coordinates['y'],
            id: states,
            text: states3,
            marker: {
              size: all_stress[2],
              sizemode: 'area',
          
            },
            sizeref:Math.max(all_stress[2])/Math.max(all_stress[2])**2,
      
          },
         
        ]
        })

        for(let i=72;i<108;i++)frames[2].data.push(progressLine[i])



        frames.push({
          name: years[3],
          data:[ {
            x: ts700_coordinates['x'],
            y: ts700_coordinates['y'],
            id: states,
            text: states4,
            marker: {
              size: all_stress[3],
              sizemode: 'area',
          
            },
            sizeref:Math.max(all_stress[3])/Math.max(all_stress[3])**2,
      
          },
         
        ]
        })

        for(let i=108;i<144;i++)frames[3].data.push(progressLine[i])


       frames.push({
          name: years[4],
          data:[ {
            x: ts800_coordinates['x'],
            y: ts800_coordinates['y'],
            id: states,
            text: states5,
            marker: {
              size: all_stress[4],
              sizemode: 'area',
          
            },
            sizeref:Math.max(all_stress[4])/Math.max(all_stress[4])**2,
      
          },
         
        ]
        })

        for(let i=144;i<180;i++)frames[4].data.push(progressLine[i])


      
        console.log(progressLine.length)
        console.log(frames[0].data)
        console.log(frames[1].data)

      var layout = {
        xaxis: {
          title: 'X-coordinate',
          range: [-0.2, 1.1]
        },
        yaxis: {
          title: 'Y-cordinate',
          range: [-0.2,1.1]
        },
        
        hovermode: 'closest',
       // autosize:true,
       margin: {
      //  l: 50,
        r: 150,
       // b: 100,
       // t: 100,
        pad: 4
      },
        showlegend:true,
        
       // We'll use updatemenus (whose functionality includes menus as
       // well as buttons) to create a play button and a pause button.
       // The play button works by passing `null`, which indicates that
       // Plotly should animate all frames. The pause button works by
       // passing `[null]`, which indicates we'd like to interrupt any
       // currently running animations with a new list of frames. Here
       // The new list of frames is empty, so it halts the animation.
        updatemenus: [{
          x: 0,
          y: 0,
          yanchor: 'top',
          xanchor: 'left',
          showactive: false,
          direction: 'left',
          type: 'buttons',
          pad: {t: 87, r: 10},
          buttons: [{
            method: 'animate',
            args: [null, {
              mode: 'immediate',
              fromcurrent: true,
              transition: {duration: 1000},
              frame: {duration: 1000, redraw: true}
            }],
            label: 'Play'
          }, {
            method: 'animate',
            args: [[null], {
              mode: 'immediate',
              transition: {duration: 0},
              frame: {duration: 0, redraw: true}
            }],
            label: 'Pause'
          }]
        }],
       // Finally, add the slider and use `pad` to position it
       // nicely next to the buttons.
        sliders: [{
          pad: {l: 130, t: 55},
          currentvalue: {
            visible: true,
            prefix: 'Timestep:',
            xanchor: 'right',
            font: {size: 20, color: '#666'}
          },
          steps: sliderSteps
        }]
      };
      
    console.log(states)

    let dat= [{
       
      x: ts0_coordinates['x'],
      y: ts0_coordinates['y'],
      mode: 'markers',
      id: states,
      text: states,
      
      marker: {
        size: all_stress[0],
        sizemode: 'area',
        sizeref:Math.max(all_stress[0])/Math.max(all_stress[0])**2
      }
    }

  ]

  

  for(let i=0;i<36;i++){
    dat.push({
       
      x: progressLine[i]['x'],
      y: progressLine[i]['y'],
      mode: 'lines+markers',
      line:{
        shape:'spline'
      },
     
    })
  }
      Plotly.newPlot('myDiv', {
        data:dat,
        layout: layout,
        frames: frames,
        scrollZoom: true,
      });

console.log(barPlot)


const modal = document.querySelector(".modal");

//const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.style.display = "block";
}

function windowOnClick(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}

//closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



console.log(barPlot)

var myPlot = document.getElementById('myDiv')
myPlot.on('plotly_click', function(data){
console.log(data)
  
 // c(barPlot[data['points'][0]['text']])
toggleModal()
d=document.getElementById('br')

 Plotly.react('bar', {
    data:[barPlot[data['points'][0]['text']]],
    layout:{title:{text:data['points'][0]['text']}}
 
})

 
});
    

} )   

