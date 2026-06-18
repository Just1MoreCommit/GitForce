import { ReactFlow, Background, Controls, Position } from '@xyflow/react'
import AgentNode from './react-flow-card/AgentNode'
import '@xyflow/react/dist/style.css'

const nodeTypes = {
  agentNode: AgentNode
}


const nodes = [
  {
    id: '1',
    type: 'agentNode',
    position: {x:300, y:0},
    style: {padding: 0},
    data: {
      label: 'Archaelogist',
      agentType: 'Discovery',
      status: 'running',
      statusText: 'Cloning repo',
    }
  },
  {
      id:'2',
      type:'agentNode',
      position: {x:300, y:160},
      style: {padding: 0},
      data: {
        label: 'Analyst',
        agentType: 'Analysis',
        status: 'idle',
        statusText: 'Waiting...'
      },

    },
]

const edges = [
  {id: 'e1-2', source: '1', target:'2'},
]

const MiddleDisplay = ()=> {
  return (
    <div className='w-full h-screen'>
      <ReactFlow
        nodes = {nodes}
        edges = {edges}
        nodeTypes = {nodeTypes}
        proOptions={{hideAttribution: true}}
        fitView
      >

        <Background color='#1a1a1a' gap={16}/>

        <Controls/>
      </ReactFlow>

    </div>
  );
}
export default MiddleDisplay