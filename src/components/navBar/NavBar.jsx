import React from 'react'
import { CategoryChip } from '../categoryChip/CategoryChip'
import headset from '../../assets/headset.webp'
import gaming from '../../assets/gaming.webp'
import in_ear from '../../assets/in-ear.webp'
import open_ear from '../../assets/open-ear.webp'
import './NavBar.css'
import { CartWidget } from '../cartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className='nav_bar'>
            <div className='title_bar'>
                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="33" viewBox="0 0 79 33" fill="none">
                    <path d="M7.43312 32.904C6.46398 32.904 5.58626 32.8126 4.79998 32.6297C4.01369 32.4651 3.32798 32.2183 2.74283 31.8891C2.15769 31.56 1.67312 31.1668 1.28912 30.7097C0.923404 30.2343 0.667404 29.7131 0.521118 29.1463L3.81255 27.6926C3.94055 28.0034 4.15998 28.3234 4.47083 28.6526C4.79998 28.9634 5.22969 29.2194 5.75998 29.4206C6.30855 29.6217 6.96683 29.7223 7.73483 29.7223C8.46626 29.7223 9.03312 29.6217 9.4354 29.4206C9.85598 29.2011 10.0663 28.8903 10.0663 28.488C10.0663 28.1954 9.9474 27.9668 9.70969 27.8023C9.49026 27.6194 9.15198 27.464 8.69483 27.336C8.23769 27.1897 7.67083 27.0526 6.99426 26.9246C6.2994 26.7783 5.5954 26.6137 4.88226 26.4308C4.16912 26.2297 3.50169 25.9646 2.87998 25.6354C2.25826 25.288 1.7554 24.84 1.3714 24.2914C1.00569 23.7246 0.822832 23.0114 0.822832 22.152C0.822832 21.256 1.06055 20.4788 1.53598 19.8206C2.0114 19.144 2.7154 18.6137 3.64798 18.2297C4.59883 17.8457 5.75083 17.6537 7.10398 17.6537C8.31083 17.6537 9.3714 17.8091 10.2857 18.12C11.2 18.4308 11.9588 18.8788 12.5623 19.464C13.184 20.0308 13.6137 20.7166 13.8514 21.5211L10.3131 22.7828C10.2217 22.3806 10.0297 22.0331 9.73712 21.7406C9.46283 21.448 9.10626 21.2286 8.6674 21.0823C8.24683 20.9177 7.74398 20.8354 7.15883 20.8354C6.44569 20.8354 5.88798 20.9451 5.48569 21.1646C5.10169 21.384 4.90969 21.6766 4.90969 22.0423C4.90969 22.3348 5.03769 22.5817 5.29369 22.7828C5.56798 22.9657 5.95198 23.1211 6.44569 23.2491C6.9394 23.3771 7.52455 23.5143 8.20112 23.6606C8.91426 23.8068 9.61826 23.9806 10.3131 24.1817C11.0263 24.3646 11.6663 24.6206 12.2331 24.9497C12.8183 25.2606 13.2754 25.6811 13.6045 26.2114C13.952 26.7234 14.1257 27.3908 14.1257 28.2137C14.1257 29.1828 13.8697 30.024 13.3577 30.7371C12.8457 31.432 12.0868 31.9714 11.0811 32.3554C10.0937 32.7211 8.87769 32.904 7.43312 32.904Z" fill="#222222" />
                    <path d="M22.2124 32.8766C20.5118 32.8766 19.2593 32.4286 18.4547 31.5326C17.6501 30.6183 17.2478 29.1646 17.2478 27.1714V21.4937H15.1907L15.273 18.0651H16.7541C17.3393 18.0468 17.7781 17.9554 18.0707 17.7908C18.3815 17.6263 18.5735 17.3154 18.6467 16.8583L19.0033 14.8286H21.4993V18.0377H24.9827V21.6308H21.4993V26.9794C21.4993 27.6011 21.6455 28.0583 21.9381 28.3508C22.249 28.6434 22.7153 28.7897 23.337 28.7897C23.6844 28.7897 24.0135 28.7531 24.3244 28.68C24.6353 28.6068 24.8913 28.5063 25.0924 28.3783V32.4651C24.5073 32.648 23.9678 32.7577 23.4741 32.7943C22.9987 32.8491 22.5781 32.8766 22.2124 32.8766Z" fill="#222222" />
                    <path d="M34.3165 32.904C32.8537 32.904 31.5554 32.6206 30.4217 32.0537C29.3063 31.4868 28.4285 30.6366 27.7885 29.5028C27.1485 28.3691 26.8285 26.952 26.8285 25.2514C26.8285 23.5508 27.1485 22.1428 27.7885 21.0274C28.4285 19.8937 29.3154 19.0526 30.4491 18.504C31.5828 17.9371 32.8811 17.6537 34.344 17.6537C35.8068 17.6537 37.1051 17.9371 38.2388 18.504C39.3725 19.0708 40.2594 19.9211 40.8994 21.0548C41.5394 22.1703 41.8594 23.5783 41.8594 25.2788C41.8594 27.016 41.5303 28.4514 40.872 29.5851C40.2137 30.7188 39.3085 31.56 38.1565 32.1086C37.0228 32.6388 35.7428 32.904 34.3165 32.904ZM34.4537 29.6948C35.112 29.6948 35.6605 29.5486 36.0994 29.256C36.5383 28.9451 36.8674 28.4788 37.0868 27.8571C37.3063 27.2354 37.416 26.4674 37.416 25.5531C37.416 24.584 37.2971 23.7703 37.0594 23.112C36.8217 22.4354 36.4651 21.9234 35.9897 21.576C35.5325 21.2103 34.9383 21.0274 34.2068 21.0274C33.5851 21.0274 33.0457 21.1828 32.5885 21.4937C32.1497 21.7863 31.8205 22.2434 31.6011 22.8651C31.3817 23.4868 31.272 24.264 31.272 25.1966C31.272 26.696 31.5463 27.8206 32.0948 28.5703C32.6617 29.32 33.448 29.6948 34.4537 29.6948Z" fill="#222222" />
                    <path d="M44.446 32.52V18.0377H48.0666L48.1489 22.9474H48.6975C48.8255 21.6674 49.0632 20.6526 49.4106 19.9028C49.7763 19.1348 50.2883 18.5771 50.9466 18.2297C51.6232 17.8823 52.4552 17.7086 53.4426 17.7086C53.5889 17.7086 53.7535 17.7177 53.9363 17.736C54.1192 17.736 54.3295 17.7543 54.5672 17.7908L54.4026 22.5086C54.11 22.3623 53.79 22.2708 53.4426 22.2343C53.1135 22.1794 52.8209 22.152 52.5649 22.152C51.8518 22.152 51.23 22.2891 50.6998 22.5634C50.1878 22.8377 49.7763 23.2583 49.4655 23.8251C49.1729 24.392 48.9809 25.1051 48.8895 25.9646V32.52H44.446Z" fill="#222222" />
                    <path d="M63.5717 32.904C62.3648 32.904 61.286 32.7486 60.3351 32.4377C59.3843 32.1086 58.5705 31.6331 57.894 31.0114C57.2357 30.3897 56.7328 29.6217 56.3854 28.7074C56.038 27.7931 55.8643 26.7417 55.8643 25.5531C55.8643 24.4011 56.0288 23.3406 56.358 22.3714C56.7054 21.4023 57.19 20.5703 57.8117 19.8754C58.4517 19.1623 59.2288 18.6137 60.1431 18.2297C61.0757 17.8457 62.118 17.6537 63.27 17.6537C64.4403 17.6537 65.4643 17.8457 66.342 18.2297C67.238 18.5954 67.9694 19.144 68.5363 19.8754C69.1214 20.6068 69.5511 21.5028 69.8254 22.5634C70.0997 23.6057 70.1911 24.8034 70.0997 26.1566L58.7717 26.2388V23.9348L67.5763 23.8526L66.0128 24.9223C66.1408 24.008 66.086 23.2674 65.8483 22.7006C65.6106 22.1154 65.2631 21.6948 64.806 21.4388C64.3488 21.1646 63.8551 21.0274 63.3248 21.0274C62.6848 21.0274 62.118 21.2011 61.6243 21.5486C61.1488 21.896 60.774 22.3988 60.4997 23.0571C60.2254 23.7154 60.0883 24.52 60.0883 25.4708C60.0883 26.9703 60.4083 28.0583 61.0483 28.7348C61.7065 29.4114 62.5385 29.7497 63.5443 29.7497C64.038 29.7497 64.4494 29.6857 64.7785 29.5577C65.1077 29.4114 65.3728 29.2377 65.574 29.0366C65.7934 28.8171 65.958 28.5794 66.0677 28.3234C66.1957 28.0674 66.2963 27.8206 66.3694 27.5828L70.2094 28.4057C70.0631 29.0823 69.8254 29.6948 69.4963 30.2434C69.1854 30.792 68.7557 31.2674 68.2071 31.6697C67.6768 32.072 67.0277 32.3737 66.2597 32.5748C65.51 32.7943 64.614 32.904 63.5717 32.904Z" fill="#222222" />
                    <path d="M4.096 11.728C3.104 11.728 2.37333 11.4667 1.904 10.944C1.43467 10.4107 1.2 9.56267 1.2 8.4V5.088H0L0.048 3.088H0.912C1.25333 3.07733 1.50933 3.024 1.68 2.928C1.86133 2.832 1.97333 2.65067 2.016 2.384L2.224 1.2H3.68V3.072H5.712V5.168H3.68V8.288C3.68 8.65067 3.76533 8.91733 3.936 9.088C4.11733 9.25867 4.38933 9.344 4.752 9.344C4.95467 9.344 5.14667 9.32267 5.328 9.28C5.50933 9.23733 5.65867 9.17867 5.776 9.104V11.488C5.43467 11.5947 5.12 11.6587 4.832 11.68C4.55467 11.712 4.30933 11.728 4.096 11.728Z" fill="#FF7D35" />
                    <path d="M7.3 11.52V0H9.876V2.64C9.876 2.85333 9.86533 3.07733 9.844 3.312C9.83333 3.536 9.80667 3.77067 9.764 4.016C9.732 4.25067 9.69467 4.49067 9.652 4.736C9.62 4.98133 9.57733 5.22133 9.524 5.456H9.908C10.0573 4.93333 10.244 4.48 10.468 4.096C10.692 3.70133 10.9853 3.39733 11.348 3.184C11.7107 2.96 12.1747 2.848 12.74 2.848C13.7427 2.848 14.4893 3.2 14.98 3.904C15.4813 4.59733 15.732 5.66933 15.732 7.12V11.52H13.14V7.552C13.14 6.688 13.012 6.04267 12.756 5.616C12.5107 5.17867 12.132 4.96 11.62 4.96C11.2253 4.96 10.9 5.08267 10.644 5.328C10.388 5.57333 10.196 5.904 10.068 6.32C9.94 6.72533 9.876 7.17867 9.876 7.68V11.52H7.3Z" fill="#FF7D35" />
                    <path d="M21.5972 11.744C20.8932 11.744 20.2639 11.6533 19.7092 11.472C19.1546 11.28 18.6799 11.0027 18.2852 10.64C17.9012 10.2773 17.6079 9.82933 17.4053 9.296C17.2026 8.76267 17.1012 8.14933 17.1012 7.456C17.1012 6.784 17.1972 6.16533 17.3892 5.6C17.5919 5.03467 17.8746 4.54933 18.2372 4.144C18.6106 3.728 19.0639 3.408 19.5972 3.184C20.1412 2.96 20.7492 2.848 21.4212 2.848C22.1039 2.848 22.7013 2.96 23.2133 3.184C23.7359 3.39733 24.1626 3.71733 24.4932 4.144C24.8346 4.57067 25.0853 5.09333 25.2453 5.712C25.4053 6.32 25.4586 7.01867 25.4053 7.808L18.7973 7.856V6.512L23.9333 6.464L23.0212 7.088C23.0959 6.55467 23.0639 6.12267 22.9253 5.792C22.7866 5.45067 22.5839 5.20533 22.3172 5.056C22.0506 4.896 21.7626 4.816 21.4533 4.816C21.0799 4.816 20.7493 4.91733 20.4613 5.12C20.1839 5.32267 19.9653 5.616 19.8053 6C19.6453 6.384 19.5653 6.85333 19.5653 7.408C19.5653 8.28267 19.7519 8.91733 20.1252 9.312C20.5092 9.70667 20.9946 9.904 21.5812 9.904C21.8692 9.904 22.1093 9.86667 22.3013 9.792C22.4933 9.70667 22.6479 9.60533 22.7652 9.488C22.8932 9.36 22.9892 9.22133 23.0532 9.072C23.1279 8.92267 23.1866 8.77867 23.2292 8.64L25.4692 9.12C25.3839 9.51467 25.2453 9.872 25.0533 10.192C24.8719 10.512 24.6213 10.7893 24.3013 11.024C23.9919 11.2587 23.6133 11.4347 23.1653 11.552C22.7279 11.68 22.2052 11.744 21.5972 11.744Z" fill="#FF7D35" />
                    <path d="M74.416 21.72L72.56 20.376L74.272 18.824L74.24 18.68L71.936 18.44L72.592 16.184L74.64 17.384L74.736 17.304L74.256 15H76.64L76.16 17.304L76.272 17.384L78.256 16.184L78.976 18.456L76.688 18.68L76.656 18.824L78.352 20.376L76.48 21.72L75.52 19.592H75.376L74.416 21.72Z" fill="#FF7D35" />
                </svg>
                
                <CartWidget />
            </div>

            <div className='categories_bar'>
                <CategoryChip img_src={headset} category_name={'Headset'}/>
                <CategoryChip img_src={gaming} category_name={'Gaming'}/>
                <CategoryChip img_src={in_ear} category_name={'In-Ear'}/>
                <CategoryChip img_src={open_ear} category_name={'Open-Ear'}/>
            </div>

        </div>
    )
}
