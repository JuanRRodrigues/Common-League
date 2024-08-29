import { Component } from "react"




const navBar = () => {
    return(
        <Component.bar>
            <Component.wrapper>
                <Component.search>
                    <Component.input placeholder='search...'/>
                    <searchIcon/>
                </Component.search>
                <Component.items>
                    <Languageicon/>
                    English
                </Component.items>
                <Component.items>
                    <DarkModeIcon/>
                </Component.items>

            </Component.wrapper>
        </Component.bar>
    )
}