<template>
  <div>
    <div class="row justify-content-center">
        <p class="display-4 mt-5 text-center">About me</p>
    </div>
    <div class="row justify-content-center">
        <p class="h1 display-4 ">
            <i class="fas fa-user-astronaut"></i>
        </p>
    </div>
    
    <div class="row justify-content-center">
        <p class="h3 mt-5 text-center">Who am I</p>
    </div>
    <div class="row justify-content-center">
        <p class="text-center my-2">
            <span role="img" aria-label="pc">💻</span> 
                &nbsp;I am a Software Engineering student at University of Málaga, Spain.&nbsp;
            <span role="img" aria-label="pc">💻</span><br/>
            <span role="img" aria-label="japanese-flags">🎌</span>
                &nbsp;日本語の学生&nbsp;
            <span role="img" aria-label="japanese-flags">🎌</span><br/>
            <span role="img" aria-label="fox">🦊</span>
                &nbsp;Fox lover&nbsp;
            <span role="img" aria-label="fox">🦊</span>
        </p>
    </div>

    <div class="row justify-content-center mb-3">
        <p class="h3 mt-5 text-center">Areas of Interest</p>
    </div>

    <div class="row mb-4 mx-3 my-2">

        <div class="col-sm-3" v-for="interest in interests" v-bind:key="interest.name">
            <div class="card bg-light">
                <div class="card-body">
                    <p class="display-1 text-center">
                        <i v-bind:class="interest.icon"></i>
                    </p>
                    <p class="card-text text-center h5">
                        {{interest.name}}
                    </p>
                </div>
            </div>
        </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
        interests: [
            {
                name: 'Technology',
                icon: 'fas fa-microchip'
            },
            {
                name: 'AI',
                icon: 'fas fa-brain'
            },
            {
                name: 'VideoGames',
                icon: 'fas fa-gamepad'
            },
            {
                name: 'Japan',
                icon: 'fas fa-torii-gate'
            },
        ],
      
        skillCategories: [
            {
                id: 'pLan',
                name: 'Programming Language',
                icon: 'fas fa-code',
                skills: [
                    {
                        name: 'JAVA',
                        icon: 'fab fa-java'
                    },
                    {
                        name: 'JavaScript',
                        icon: 'fab fa-js-square'
                    },
                    {
                        name: 'PHP',
                        icon: 'fab fa-php'
                    }
                ]
            },
            {
                id: 'db',
                name: 'Database',
                icon: 'fas fa-database',
                skills: [
                    {
                        name: 'MySQL',
                        icon: 'fas fa-database'
                    },
                    {
                        name: 'MongoDB',
                        icon: 'fas fa-leaf'
                    },
                    {
                        name: 'SQL Server',
                        icon: 'fab fa-microsoft'
                    }
                ]
            },
            {
                id: 'other',
                name: 'Other',
                icon: 'fas fa-seedling',
                skills: [
                    {
                        name: 'Node.js',
                        icon: 'fab fa-node-js'
                    },
                    {
                        name: 'JavaScript',
                        icon: 'fab fa-vuejs'
                    },
                    {
                        name: 'Git',
                        icon: 'fab fa-git-square'
                    }
                ]
            }
  
        ]
    }
  }
}
</script>