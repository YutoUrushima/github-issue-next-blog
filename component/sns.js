import styles from '../styles/components/sns.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

const SNSList = [
    {title: 'github', link: '/'},
    {title: 'twitter', link: '/'},
    {title: 'wantedly', link: '/'},
]

export const SNS = () => {
    return (
        <ul className={styles.sns}>
            {SNSList.map(sns => {
                return (
                    <li className={classNames(sns.title, styles.snsItem)} >
                        <Link href={sns.link}>
                            <a target="_blank">
                                <img src={`./b-${sns.title}-icon.png`} alt={sns.title}/>
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}