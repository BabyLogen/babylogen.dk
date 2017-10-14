<template>
  <div>
    <grid-container>
      <grid-column xs="12">
        <h2 class="NewsletterSignup-header">{{header}}</h2>
      </grid-column>
    </grid-container>
    <grid-container class="NewsletterSignup">
      <grid-column xs="0" sm="1" md="2" lg="3" />
      <grid-column xs="12" sm="10" md="8" lg="6">
        <!-- Begin MailChimp Signup Form -->
        <form action="https://babyteamet.us16.list-manage.com/subscribe/post?u=d48b4be090235c8ddeea68679&amp;id=5158f730f6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <input placeholder="Din e-mail" type="email" value="" name="EMAIL" class="NewsletterSignup__email" id="mce-EMAIL">
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d48b4be090235c8ddeea68679_5158f730f6" tabindex="-1" value=""></div>
          <input type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" class="NewsletterSignup__button">
        </form>
        <!--End mc_embed_signup-->
      </grid-column>
      <grid-column xs="0" sm="1" md="2" lg="3" />
      <grid-column xs="0" sm="1" md="2" lg="3" />
      <grid-column xs="12" sm="10" md="8" lg="6">
        <div v-if="body" v-html="htmlBody"/>
      </grid-column>
      <grid-column xs="0" sm="1" md="2" lg="3" />
    </grid-container>
  </div>
</template>

<script>
import marked from 'marked';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
  },
  props: {
    header: String,
    body: String,
  },
  computed: {
    htmlBody() {
      return this.body ? marked(this.body, { breaks: true }) : '<span></span>';
    },
  },
};
</script>

<style>
  @import '../assets/css/variables.css';
  .NewsletterSignup-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .NewsletterSignup {
    background-color: var(--color-black);
    color: var(--color-white);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .NewsletterSignup a {
    color: var(--color-primary);
  }

  .NewsletterSignup__email {
    width: 75%;
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 1rem;
    background-color: var(--color-white);
    border: 0;
    padding: 0.5rem 1rem;
  }

  .NewsletterSignup__button {
    display: inline-block;
    width: 25%;
    text-decoration: none;
    padding: 0.5rem 0;
    line-height: 2;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
    color: var(--color-black) !important;
    background: var(--color-primary);
    border: 0;
    border-radius: 0;
  }
  .NewsletterSignup__button:hover {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .NewsletterSignup__button:focus {
    outline: 0;
  }

</style>
