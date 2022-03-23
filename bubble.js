first_stress=[]
second_stress=[]
d3.csv('stress.csv',function(data){

    for (var i = 0; i < data.length; i++) {
        first_stress.push(data[i]['NS-Initial'])
        second_stress.push(data[i]['NS-Final'])
        
      }
    

} ) 


first_coordinates={}
first_coordinates['x']=[]
first_coordinates['y']=[]
second_coordinates={}
second_coordinates['x']=[]
second_coordinates['y']=[]
states=[]
states1=[]
progressLine=[]

barPlot={}



d3.json('file1.json',function(data){

    for (var i = 0; i < data.length; i++) {

        let state=data[i]['resource_name']
        state=state.split(" ")
        stateName=""
        
        for(let k=0;k<state.length-1;k++){
          stateName+=(state[k]+" ")
        }
        if(states.length<=35){states.push(stateName)}
        else states1.push(stateName+" 1")
      
        if(state[state.length-1]=='firstTimestamp'){
        first_coordinates['x'].push(data[i]['ld'][0])
        first_coordinates['y'].push(data[i]['ld'][1])
        }

        if(state[state.length-1]=='secondTimestamp'){
        second_coordinates['x'].push(data[i]['ld'][0])
        second_coordinates['y'].push(data[i]['ld'][1])
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
        
        if(state[state.length-1]=='firstTimestamp'){
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
        else{
         
          let stt=stateName+" 1"
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


      for(let i =0;i<36;i++){
        
        progressLine.push( {
       
          x: first_coordinates['x'][i],
          y: first_coordinates['y'][i],
          mode: 'lines+markers',
           line: {simplify: false},
          name:states[i],
          visible:'legendonly'
        })
        
      }

      for(let i=0;i<36;i++){
        progressLine.push( {
       
          x: [first_coordinates['x'][i],second_coordinates['x'][i]],
          y: [first_coordinates['y'][i],second_coordinates['y'][i]],
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


      years=['1','2']
      var sliderSteps = [];
      for (i = 0; i < years.length; i++) {
        sliderSteps.push({
          method: 'animate',
          label: years[i],
          args: [[years[i]], {
            mode: 'immediate',
            transition: {duration: 300},
            frame: {duration: 300, redraw: false},
          }]
        });
      }

      var frames = [];
      
        frames.push({
          name: years[0],
          data: [{
            x: first_coordinates['x'],
            y: first_coordinates['y'],
            id: states,
            text: states,
            marker: {size: first_stress,
              sizemode: 'area',
          
            },
            sizeref:Math.max(first_stress)/Math.max(first_stress)**2,
            
          }
        ]}
          )
        for (let i=0;i<36;i++) frames[0].data.push(progressLine[i])

        frames.push({
          name: years[1],
          data:[ {
            x: second_coordinates['x'],
            y: second_coordinates['y'],
            id: states,
            text: states1,
            marker: {
              size: second_stress,
              sizemode: 'area',
          
            },
            sizeref:Math.max(second_stress)/Math.max(second_stress)**2,
      
          },
         
        ]
        })

        for(let i=36;i<progressLine.length;i++)frames[1].data.push(progressLine[i])
      
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
        autosize:true,
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
              frame: {duration: 500, redraw: true}
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
       
      x: first_coordinates['x'],
      y: [],
      mode: 'markers',
      id: states,
      text: states,
     
      marker: {
        size: first_stress,
        sizemode: 'area',
        sizeref:Math.max(first_stress)/Math.max(first_stress)**2
      }
    }

  ]

  

  for(let i=0;i<36;i++){
    dat.push({
       
      x: progressLine[i]['x'],
      y: [],
      mode: 'lines+markers',
      line:{
        shape:'spline'
      }
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

const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



console.log(barPlot)

var myPlot = document.getElementById('myDiv')
myPlot.on('plotly_click', function(data){
  console.log(data)
  
 // c(barPlot[data['points'][0]['text']])
 toggleModal()

console.log(barPlot[data['points'][0]['text']])

  Plotly.newPlot('bar', {
    data:[barPlot[data['points'][0]['text']]],
    layout:{title:{text:data['points'][0]['text']}}
 
})

 
});
    

} )   

