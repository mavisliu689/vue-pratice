<template>
    <nav class="nabar nabar-inverse navbar-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar" aria-expanded="false" aria-controls="navbars">
                    <span class="sr-only">????</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- <a class="navbar-brand" href="#">Project name</a> -->
            </div>
            <div id ="navbar" class="navbar-collapse collapse">

            <form class="nabar-form navbar-left">
                <slot name="right">
                </slot>
                <slot name="left">
                </slot>
            </form>
            </div>
        </div>
    </nav>
</template>
