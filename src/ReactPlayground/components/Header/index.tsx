import {
  MoonOutlined,
  ShareAltOutlined,
  SunOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import { message } from 'antd'
import copy from 'copy-to-clipboard'
import { useContext } from 'react'
import { PlaygroundContext } from '../../PlaygroundContext'
import logoSvg from './icons/logo.svg'
import styles from './index.module.scss'
import { downloadFiles } from '../../utils'

export default function Header() {
  const { theme, setTheme, files } = useContext(PlaygroundContext)
  const [messageApi, contextHolder] = message.useMessage()

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          alt="logo"
          src={logoSvg}
        />
        <span>React Playground</span>
      </div>
      <div className={styles.links}>
        {theme === 'light' && (
          <MoonOutlined
            title="切换暗色主题"
            className={styles.theme}
            onClick={() => setTheme('dark')}
          />
        )}
        {theme === 'dark' && (
          <SunOutlined
            title="切换亮色主题"
            className={styles.theme}
            onClick={() => setTheme('light')}
          />
        )}

        {contextHolder}
        <ShareAltOutlined
          style={{ marginLeft: '10px' }}
          onClick={() => {
            copy(window.location.href)
            messageApi.success('分享链接已复制。')
          }}
        />

        <DownloadOutlined
          style={{ marginLeft: '10px' }}
          onClick={async () => {
            await downloadFiles(files)
            message.success('下载完成')
          }}
        />
      </div>
    </div>
  )
}
