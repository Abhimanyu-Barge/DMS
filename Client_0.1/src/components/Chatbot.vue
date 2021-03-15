<template>  
<v-card height="100%" flat>
    <div >
      <div id="cf-context" ref="cfContext">
      </div>
    </div>
</v-card>
</template>
<script>
window.cf = require('conversational-form')
export default {
  name: 'conversationForm',
  props: {
    formId: {
      type: String
    },
    getFormApi: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      location: ['Pune', 'Bihar', 'Orisa', 'Haryana', 'Mumbai'],
      tags: [
        {
          tag: 'input',
          'cf-questions': 'hi,how can i help you?',
          'cf-input-placeholder': '',
          type: 'text',
          name: 'userinput',
          ref: 'userinput',
          required: true,
          id: 'userInput'
        },
         {
          tag: 'input',
          'cf-questions': 'Ok!! please wait .. i can search...',
          'cf-input-placeholder': '',
          type: 'text',
          name: 'waiting',
          ref: 'wating',
          required: true,
          id: 'plzwait'
        }
      ]
    }
  },
  methods: {
    generateFormControls() {
    },
    initConversationalForm() {
      var conversationForm = this
      var conversationalForm = window.cf.startTheConversation({
        options: {
          context: conversationForm.$refs.cfContext,
          flowStepCallback: function(dto, success, error) {
            console.log(dto.tag.id)

            if (dto.tag.id === 'userInput') {
              if (dto.tag.value.toLowerCase() === '') {
                return error('Please enter valid campaign name')
               } else {
                return success()
               }
            } 
            success()
          },
          submitCallback: function() {
            var result = conversationalForm.getFormData(true)
            // console.log(result)
            conversationForm.createNewCampaign(result)
          }
        },
        // formEl: false,
        tags: conversationForm.tags
      })
    },
    createNewCampaign(result) {
      var newCampaignData = {
        campaignName: result.campaignName,
        campaignDescription: result.campaignDescription,
        campaignLocation: result.campaignLocation[0],
        startDate: new Date(result.startDate),
        endDate: new Date(result.endDate),
        vacancy: parseInt(result.vacancy),
        campaignForPost: result.campaignForPost[0]
      }
      console.log('Sending following data : ' + JSON.stringify(newCampaignData))
    }
  },
  mounted() {
    this.initConversationalForm()
  }
}
</script>

<style>
#cf-context {
  height: calc(100vh - 45px);
  z-index:0;
  .conversational-form {
    background: transparent;
    &:before {
      content: none;
    }
  }
  .conversational-form-inner {
    cf-chat scrollable {
      padding-left: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      height: calc(100vh - 160px);
      overflow-y: auto;
      font-size: 14px;

      cf-chat-response {
        padding: 0;
        list-style-type: none;
        width: 90%;
        margin-bottom: 15px;
        max-width: 90%;
        &.peak-thumb {
          align-self: flex-start;

          thumb {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            /* overflow: hidden; */
            border: 3px solid #eee;
            position: relative;
            padding: 16px;
            display: inline-block;
            vertical-align: top;
            background-size: 40px;
            background-repeat: no-repeat;
            background-color: #fff;
          }
          text {
            display: inline-block;
            vertical-align: top;
            p {
              background: #3498db;
              color: #fff;
              border-radius: 25px;
              padding: 15px 20px;
              position: relative;
              margin-left: 15px;
              &:before {
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
                border-color: rgba(136, 183, 213, 0);
                border-right-color: #3498db;
                border-width: 17px;
                margin-top: 0px;
                left: -25px;
              }
            }
          }
        }
        &.robot {
          thumb[style] {
            background-image: url('../../static/assets/images/users/bot.png') !important;
          }
        }
        &.user.peak-thumb {
          align-self: flex-end;
          text-align: right;
          thumb {
            float: right;
          }
          thumb[style] {
            background-image: url('../../static/assets/images/users/user.png') !important;
          }
          text p {
            background: #ddd;
            border-radius: 25px;
            padding: 15px 20px;
            margin-left: auto;
            display: inline-block;
            text-align: left;
            margin-right: 15px;
            color: #666;
            &:before {
              border-left-color: #ddd;
              border-width: 17px;
              margin-top: 0px;
              right: -26px;
              left: auto;
              border-right-color: transparent;
            }
          }
        }
      }
    }
    textarea {
      border-radius: 50px;
      font-weight: 600;
      color: #555;
      border: 1px solid #e0e0e0;
      &:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, .2);
        opacity: 1;
        color: #666;
      }
    }
  }
}
</style>
