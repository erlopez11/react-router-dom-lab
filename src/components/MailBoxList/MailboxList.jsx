import { Link } from 'react-router';

const MailboxList = (props) => {

    return (
        <main>
            <h1>MailBox List</h1>

            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );

};

export default MailboxList;