import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { useContext } from 'react'
import { PlaygroundContext } from './PlaygroundContext'
import CodeEditor from './components/CodeEditor'
import Header from './components/Header'
import Preview from './components/Preview'

export default function ReactPlayground() {
  const { theme } = useContext(PlaygroundContext)
  return (
    <div
      style={{ height: '100vh' }}
      className={theme}
    >
      <Header />
      <Allotment defaultSizes={[100, 100]}>
        <Allotment.Pane minSize={0}>
          <CodeEditor />
        </Allotment.Pane>
        <Allotment.Pane minSize={0}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  )
}
