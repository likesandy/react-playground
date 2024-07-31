import { debounce } from 'lodash-es'
import { useContext } from 'react'
import { PlaygroundContext } from '../../PlaygroundContext'
import Editor from './Editor'
import FileNameList from './FileNameList'

export default function CodeEditor() {
  const { files, setFiles, selectedFileName, theme } =
    useContext(PlaygroundContext)

  const file = files[selectedFileName]

  function onEditorChange(value?: string) {
    files[file.name].value = value!
    setFiles({ ...files })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <FileNameList />
      <Editor
        file={file}
        options={{ theme: `vs-${theme}` }}
        onChange={debounce(onEditorChange, 500)}
      />
    </div>
  )
}
