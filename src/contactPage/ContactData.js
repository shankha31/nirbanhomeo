import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactFeildData = [
    {icon : <MailOutlineIcon className='iconBorder'/> , headerTxt : 'Chat to us' , messageTxt : 'our Triendly team is here to neip', footerTxt : 'hi@untitledui.com'},
    {icon : <LocationOnIcon className='iconBorder'/> , headerTxt : 'Visit us', messageTxt : 'Come say hello at our office HQ.', footerTxt : '100 Smith Street, Collingwood VIC 3066 AU'},
    {icon : <PhoneIcon className='iconBorder'/> , headerTxt : 'Call us', messageTxt : 'Mon-Fri from 8am to 5pm.', footerTxt : '+1 (555) 000-0000'}
]

const SocialMediaData = [
    {icon : <FacebookIcon className='iconBorder'/>, link : 'https://www.facebook.com/shankha.ghosh.1238/'},
    {icon : <WhatsAppIcon className='iconBorder'/>, link : 'https://www.instagram.com/adi.31_/'},
    {icon : <TwitterIcon className='iconBorder'/>, link : 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'},
]

export {SocialMediaData,ContactFeildData};