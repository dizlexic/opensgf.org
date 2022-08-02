import Image from 'next/image';
import styles from './ChatBubble.module.scss';
export const ChatBubble = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.columnOne}>
                    <div className={styles.columnBubble}>
                        <Image
                            src="/images/light-blue-chat-bubble.svg"
                            alt="A chat bubble about a client issue"
                            width="526.03px"
                            height="300px"
                        />
                        <div className={styles.bubbleChat}>
                            <div className={styles.bubbleHeader}>Client Issue</div>
                            <div className={styles.chat}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.columnBubble}>
                        <Image
                            src="/images/dark-blue-chat-bubble.svg"
                            alt="A chat bubble about a client issue"
                            width="526.03px"
                            height="300px"
                        />
                        <div className={styles.bubbleChat}>
                            <div className={styles.bubbleHeader}>Our Solution</div>
                            <div className={styles.chat}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};