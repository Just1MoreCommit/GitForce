import { ReactFlow, Background, Controls } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'feat: add auth' } },
  { id: '2', position: { x: 350, y: 100 }, data: { label: 'fix: CORS issue' } },
  { id: '3', position: { x: 600, y: 100 }, data: { label: 'chore: update deps' } },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
]

function MiddleDisplay() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        colorMode="dark"
        proOptions={{hideAttribution: true}}
        fitView
      >
        <Background color="#1c1b1b" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default MiddleDisplay