package cz.fi.muni.pb138.DEBVisDic.service.interfaces;

import java.io.IOException;

/**
 * Interface for IliService class
 *
 * @author Tomas Kopecky
 */
public interface IliService {

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTab31(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTab30(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTtl30(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTtl31(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTtl13(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliTtlMap(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliCsv(String id) throws IOException;

    /**
     * Method goes line by line in file and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    String getIliMainTtl(String id) throws IOException;

}
