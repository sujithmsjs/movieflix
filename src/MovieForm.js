import { useForm } from "react-hook-form";
import DropdwonBox from "./ui/DropdownBox";
import Input from "./ui/Input";
import { existsByTitle, saveMovie } from "./apis/MovieService"

const initForm = {
    collection: "836.83",
    director: "Christopher Nolan",
    duration: 148,
    genre: "Action",
    rating: 8.8,
    releaseDate: "2010-07-16",
    title: "Inception"
}

const MovieForm = (initValue) => {

    const { register, control, form, handleSubmit, formState } = useForm({
        defaultValues: initForm
    })


    const { errors, isDirty, isValid } = formState;

    const onSubmit = (data) => {
        console.info(data);
        // API Call...
        saveMovie(data).then(results => {
            console.info(results.data);
            console.info(results);
        }).catch(error => {
            console.info(error.response.data);
        })


    }

    return (<form onSubmit={handleSubmit(onSubmit)} noValidate>

        <Input label="Title" errors={errors} register={register('title', {
            validate: {
                unavailable: async (value) => {
                    try {
                        const results = await existsByTitle(value);
                        const isAlreadyExists = results.data;
                        console.info('Inside: THEN : ', isAlreadyExists);
                        return isAlreadyExists ? 'Sorry, title is already exists!' : true;
                    } catch (error) {
                        console.error(error);
                        return false;
                    }
                }
            }
        }
        )} />

        <Input label="Director" register={register('director', { required: "Director is required" })} errors={errors} />
        <Input type="number" label="Duration" register={register('duration')} errors={errors} />


        <DropdwonBox name='genre' register={register} options={['ANIMATION', 'FANTASY', 'DRAMA', 'WAR', 'SCI_FI', 'HISTORICAL', 'DOCUMENTARY', 'ADVENTURE', 'CRIME', 'SUPERHERO', 'ACTION', 'THRILLER', 'COMEDY', 'SPY', 'MYSTERY', 'FAMILY', 'HORROR', 'MUSICAL', 'WESTERN', 'ROMANCE']} />




        <Input type="date" label="ReleaseDate" register={register('releaseDate')} errors={errors} />
        <Input type="number" label="Collection" register={register('collection')} errors={errors} />
        <Input type="number" label="Rating" register={register('rating')} errors={errors} />

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>);
}

export default MovieForm;