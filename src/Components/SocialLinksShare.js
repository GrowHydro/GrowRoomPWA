import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";


const SocialLinksShare = ()=>{

    return(<>
             <div>
             <FacebookShareButton
                url={"https://www.homegrownhydro.com"}
                quote={"From Seed to Smoke Grown your own legal dope"}
                hastag="#GoGreenWithHydro"
             ><FacebookIcon /></FacebookShareButton>
             <LinkedinShareButton><LinkedinIcon /></LinkedinShareButton>
             <RedditShareButton><RedditIcon /></RedditShareButton>
             <TwitterShareButton><TwitterIcon/></TwitterShareButton>
             <TelegramShareButton><TelegramIcon/></TelegramShareButton>
             <PinterestShareButton><PinterestIcon/></PinterestShareButton>
            </div>
         </>)
}

export default SocialLinksShare