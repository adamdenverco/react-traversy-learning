import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import Spinner from "./components/Spinner";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
{
    /* https://www.youtube.com/watch?v=LDB4uaJ87e0&t=154s
                leave off at 2:37:00 */
}

const App = () => {
    const addJob = async (newJob) => {
        console.log(newJob);
        try {
            const res = await fetch("/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newJob),
            });
        } catch (error) {
            console.log("error");
            console.log(error);
        }
        return;
    };

    const updateJob = async (updatedJob) => {
        console.log(updatedJob);
        try {
            const res = await fetch(`/api/jobs/${updatedJob.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedJob),
            });
        } catch (error) {
            console.log("error");
            console.log(error);
        }
        return;
    };

    const deleteJob = async (id) => {
        console.log("delete id: " + id);
        try {
            const res = await fetch(`/api/jobs/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log("error");
            console.log(error);
        }
        return;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path={`/jobs/:id`}
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                    hydrateFallback={<Spinner />}
                />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route
                    path="/edit-job/:id"
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                    hydrateFallback={<Spinner />}
                />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
