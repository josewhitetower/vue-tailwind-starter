<template>
    <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars0.githubusercontent.com/u/19823791?s=400&u=edeb2022eac96d91012a3b1a9b86c0e30db88fe2&v=4" alt=""/>
            <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
                <p class="text-xl leading-tight">{{name}}</p>
                <p class="text-sm leading-tight text-grey-dark">{{work}}</p>
            </div>
            <div>
                <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple-700 text-purple hover:bg-purple-700 hover:text-white">Message</button>
            </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'José Torreblanca',
            work: 'Developer at SPIEGEL TECHLAB'
        }
    }
}
</script>